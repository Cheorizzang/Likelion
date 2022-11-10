import React from "react";
import Header from "./Header";
import Form from "./Form";
import ResultLoading from "./ResultLoading";
import ResultCont from "./ResultCont";
import Footer from "./Footer";

export default function Main() {
    return (
        <>
            <Header />
            <Form />
            <ResultLoading />
            <ResultCont />
            <Footer />
        </>
    );
}
