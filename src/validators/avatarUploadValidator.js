function validateAvatarUpload(value) {
  // Still doesn't work for left extension
  const fileExtensionRegExp = /^\w\.pnggg|png|jpeg|jpg$/;

  if (fileExtensionRegExp.test(value)) {
    return "";
  } else {
    return "Avatar file must have png/jpg/jpeg extension only!";
  }
}

export default validateAvatarUpload;
