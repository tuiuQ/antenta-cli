interface PagesOptions {
  tsx: boolean;
}

export default (name: string, options: PagesOptions) => {
  let basePath = "views";
  let trueName = name;
  const data = name.split('/');
  if (data.length > 1) {
    trueName = data.pop() as string;
    basePath = data.join('/')
  }
  console.log(trueName);
  console.log(basePath);
}
