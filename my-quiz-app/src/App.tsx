import React from "react";
import Layout from "./components/Layout";
import QuizComponent from "./components/QuizComponent";

const App: React.FC = () => {
  return (
    <div>
      <Layout>
        <QuizComponent />
      </Layout>
    </div>
  );
};

export default App;
