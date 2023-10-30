import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ProjectsDesign } from "../ProjectDesign";
import { ProjectsDev } from "../ProjectsDev";
import { ProjectsDevCoop } from "../ProjectsDevCoop";
import { useMagic } from "../../magic-context";


export const Container = () => {
    const {magicColor} = useMagic();

    return(
        <div className='container' style={{ backgroundColor: magicColor() }}>
            <Header />
            <ProjectsDev />
            <ProjectsDevCoop />
            <ProjectsDesign />
            <Footer />
        </div>
    )
}