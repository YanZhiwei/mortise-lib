import "./customIdElement";
import "./elementExtension";
console.log("customIdElement test");

const customIdElement = document.getElementById("btnsetCustomId");
if (customIdElement != null) {
  console.log("customIdElement is not null");
  customIdElement.addEventListener("click", () => {
    console.log("customIdElement is clicked");
    customIdElement.setCustomId();
    console.log("customIdElement.getCustomId()", customIdElement.getCustomId());
  });
}

const getUrlElement = document.getElementById("btngetUrl");
if (getUrlElement != null) {
  console.log("getUrlElement is not null");
  getUrlElement.addEventListener("click", () => {
    console.log("getUrlElement is clicked");
    console.log("getUrlElement.geturl()", getUrlElement.getUrl());
  });
}

const getTitleElement = document.getElementById("btngetTitle");
if (getTitleElement != null) {
  console.log("getTitleElement is not null");
  getTitleElement.addEventListener("click", () => {
    console.log("getTitleElement is clicked");
    console.log("getTitleElement.getTitle()", getTitleElement.getTitle());
  });
}

const getValueElement = document.getElementById("btngetValue");
if (getValueElement != null) {
  console.log("getValueElement is not null");
  getValueElement.addEventListener("click", () => {
    console.log("getValueElement is clicked");
    const inputElement = document.getElementById("txtValue");
    if (inputElement != null)
      console.log("getValueElement.getValue()", inputElement.getValue());
  });
}

const isVisibleElement = document.getElementById("btnisVisible");
if (isVisibleElement != null) {
  console.log("isVisibleElement is not null");
  isVisibleElement.addEventListener("click", () => {
    console.log("isVisibleElement is clicked");
    console.log("isVisibleElement.isVisible()", isVisibleElement.isVisible());
  });
}

const getFrameIndex = document.getElementById("btngetFrameIndex");
if (getFrameIndex != null) {
  console.log("getFrameIndex is not null");
  getFrameIndex.addEventListener("click", () => {
    console.log("getFrameIndex is clicked");
    console.log("getFrameIndex.getFrameIndex()", getFrameIndex.getFrameIndex());
  });
}

const getPaddingElement = document.getElementById("btngetPadding");
if (getPaddingElement != null) {
  console.log("getPadding is not null");
  getPaddingElement.addEventListener("click", () => {
    console.log("getPadding is clicked");
    console.log("getPadding.getPadding()", getPaddingElement.getPadding());
  });
}
