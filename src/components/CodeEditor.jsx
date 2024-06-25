import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here");

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleRunCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
      toast("Code executed successfully!");
    } catch (error) {
      toast("Error executing code: " + error.message);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Code Editor</h1>
      <div className="w-full max-w-4xl space-y-4">
        <Editor
          height="60vh"
          defaultLanguage="javascript"
          defaultValue="// Write your code here"
          onChange={handleEditorChange}
        />
        <Button onClick={handleRunCode} className="mt-4">Run Code</Button>
      </div>
    </div>
  );
};

export default CodeEditor;