// ==UserScript==
// @name         AWS Content Focus
// @namespace    http://aws.amazon.com/
// @version      0.3
// @description  remove extra content from AWS content
// @author       Brian Pfeil
// @match        https://aws.amazon.com/*
// @grant        none
// @updateURL   https://raw.githubusercontent.com/pfeilbr/browser-user-scripts/master/aws.js
// @downloadURL https://raw.githubusercontent.com/pfeilbr/browser-user-scripts/master/aws.js
// ==/UserScript==

(function () {
  "use strict";

  const log = (o) => {
    console.info(`user script: ${o}`);
  };

  const remove = (selector) => {
    try {
      const e = document.querySelector(selector).remove();
      if (e) {
        e.remove();
      } else {
        log(`selector "${selector}" not found`);
      }
    } catch (error) {}
  };

  const focusPageContent = () => {
    const selectors = [
      // remove fat header content
      "#aws-page-header",
      "div.awsm",

      // remove related posts
      "#aws-page-content > div.aws-blog-related-posts",

      // remove right sidebar content
      "div.aws-directories-container",

      // remove left nav
      ".leftnav",
      "aside",
    ];

    selectors.forEach((selector) => remove(selector));

    // shrink top margin
    document.querySelector("#aws-page-content").style.marginTop = "10px";

    // increase content width to fill page more
    document.querySelector("#aws-page-content > div > main").style.width =
      "80%";
  };

  document.addEventListener(
    "keyup",
    (e) => {
      if (e.key === "f") {
        log(`focusing page content.  triggered by pressing "${e.key}" key`);
        focusPageContent();
      }
    },
    false
  );
})();
