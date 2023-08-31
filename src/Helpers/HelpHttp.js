export const HelpHttp =()=>{

    const CustomFetch =(endpoint,options)=>{
        //PONER LO QUE ACEPTA EN LAS CABECERA
        const defaultHeader ={
            accept:"application/json",
        };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET"
        options.headers = options.headers ? {...defaultHeader,...options.headers}: defaultHeader;
        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;
        console.log(options);
        //FUNCION PARA ABRTAR CUANDO HAY PROBLEMAS CON EL SERVIDOR
        setTimeout(()  => controller.abort(), 3000);
        
        // MODELO PARA PASARLO A LA PROMISE.REJECT
        // let fetchErr = {
        //     err:true,
        //     status: res.status || "00",
        //     statusText: res.statusText || "OCURRIO UN ERROR"
        // }
        
        return fetch(endpoint, options)
        .then((res)=> res.ok ? res.json(): Promise.reject({
            //muestra al ocurrir un error en el envio de inf
            err:true,
            status: res.status || "00",
            statusText: res.statusText || "OCURRIO UN ERROR"

        }))
        .catch((err)=> err);
    };

    const get =(url, options = {})=> CustomFetch(url,options)
    const post =(url, options ={})=>{
        options.method = "POST";
        return CustomFetch(url,options)
    }
    const put =(url,options ={})=>{
        options.method = "PUT";
        return CustomFetch(url,options)
    }
    const del =(url,options ={})=>{
        options.method = "DELETE";
        return CustomFetch(url,options)
    }

    return {
        get,
        post,
        put,
        del,
    };
}