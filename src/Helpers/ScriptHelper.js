const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
};

const appendSnippet = (snippet) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = snippet;
    document.body.appendChild(script);
};

const ScriptHelper = {
    appendScript,
    appendSnippet,
};

export default ScriptHelper;
