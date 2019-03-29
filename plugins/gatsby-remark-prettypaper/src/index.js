"use strict";
const visit = require('unist-util-visit');
const isRelativeUrl = require(`is-relative-url`);
const fsExtra = require(`fs-extra`);
const path = require(`path`);
const _ = require(`lodash`);

const parser = require('./utils/parser');
const color = require('./specimens/color');
const gallery = require('./specimens/gallery');
const font = require('./specimens/font');
const textstyle = require('./specimens/textstyle');
const lottie = require('./specimens/lottie');
const image = require('./specimens/image');
const video = require('./specimens/video');
const glyphs = require('./specimens/glyphs');


module.exports = ({ files, markdownNode, markdownAST, pathPrefix, getNode }) => {

  const filesToCopy = new Map();

  const visitor = url => {
    if (isRelativeUrl(url)) {
      const linkPath = path.join(getNode(markdownNode.parent).dir, url)
      const linkNode = _.find(files, file => {
        if (file && file.absolutePath) {
          return file.absolutePath === linkPath
        }
        return null
      })
      if (linkNode && linkNode.absolutePath) {
        const newFilePath = path.join(process.cwd(),`public`,`${linkNode.relativePath}`)
        const linkURL = path.join(pathPrefix || "/", linkNode.relativePath);
        filesToCopy.set(linkPath, newFilePath)
        return linkURL;
      }
    }
  }

  const changeLinks = (content) => {

    if(content.src){
      content.src = visitor(content.src);
    }

    if(content[0]){
      content.forEach( (element, index, array) => {
        if(element.src){
          array[index].src = visitor(element.src);
        }
      });
    }

    return content;
  }


  visit(markdownAST, `code`, node => {
    let specimen;
    let option;
    let content;
    let component;

    if(node.lang) {
      specimen = node.lang.split('|')[0]
      option = node.lang.split('|')[1];
    }

    if(specimen) specimen = specimen.toLowerCase().trim();
    if(option) option = option.toLowerCase().trim();

    switch(specimen) {
      case "color":
        content = parser.multiplyObjects(node.value);
        component = color(option, content);
        break;
      case "gallery":
        content = parser.multiplyObjects(node.value);
        content = changeLinks(content);
        component = gallery(option, content);
        break;
      case "image":
        content = parser.singleObject(node.value);
        content = changeLinks(content);
        component = image(option, content);
        break;
      case "font":
        content = parser.multiplyObjects(node.value);
        content = changeLinks(content);
        component = font(option, content);
        break;
      case "textstyle":
        content = parser.multiplyObjects(node.value);
        content = changeLinks(content);
        component = textstyle(option, content);
        break;
      case "lottie":
        content = parser.singleObject(node.value);
        content = changeLinks(content);
        component = lottie(option, content);
        break;
      case "video":
        content = parser.singleObject(node.value);
        content = changeLinks(content);
        component = video(option, content);
        break;
      case "glyphs":
        content = parser.singleObject(node.value);
        content = changeLinks(content);
        component = glyphs(option, content);
        break;
      default: break;
    }

    if (component) {
      node.type = `html`
      node.value = component;
    }
  });

  return Promise.all(
    Array.from(filesToCopy, async ([linkPath, newFilePath]) => {
      // Don't copy anything is the file already exists at the location.
      if (!fsExtra.existsSync(newFilePath)) {
        try {
          await fsExtra.ensureDir(path.dirname(newFilePath))
          await fsExtra.copy(linkPath, newFilePath)
        } catch (err) {
          console.error(`error copying file`, err)
        }
      }
    })
  )

};