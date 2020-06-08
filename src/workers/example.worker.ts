// @ts-ignore
onmessage = (env) => {
  let value: string = env.data;
  setTimeout(()=>{
    // @ts-ignore
    postMessage(`Message from worker ${value}`);
  },3000)
}