const useQueue = () => {

 

    let script = document.createElement("script");
    script.src="//static.queue-it.net/script/queueclient.min.js"
    script.async=true;
    document.body.appendChild(script)
    console.log("Testing here again.")

 

    let wrConfig = document.createElement("script")
    wrConfig.src="//static.queue-it.net/script/queueconfigloader.js"
    wrConfig.async=true;
    // wrConfig["data-queueit-intercept"]=""
    wrConfig["data-queueit-c"]="throtest"
    wrConfig["data-queueit-spa"]="true"
    // wrConfig.async=true;
    document.body.appendChild(wrConfig)
    console.log(Object.keys(window))
  //  Function that calls Queue-it, checking WR configuration
    window.QueueIt.validateUser();

 

    // window.dispatchEvent(new CustomEvent("queuePassed", {detail:{} }))

 

    return () => {
      document.body.removeChild(script)
      document.body.removeChild(wrConfig)
    }
}

 

export default useQueue