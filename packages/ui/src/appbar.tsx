import { type JSX } from "react";
import { SecondaryButton } from "./button";

type AppbarProps = {
    onSignIn: () => void,
    onSignUp: () => void
}

export function Appbar({onSignIn, onSignUp}: AppbarProps): JSX.Element{

    return( 
    <>     
    <div className="flex gap-x-12 p-2">
        <div className="flex justify-center m-2 mx-6">
            <h3 className="ml-4 text-2xl text-purple-800 font-sans font-bold">PhonePe</h3>
        </div>
        <div className="flex justify-around space-x-4 font-semibold w-3/4 m-2">
            <div className="flex justify-center">
               <SecondaryButton label={"Products"}/>
            </div>
            <div className="flex justify-center">
                <SecondaryButton label={"About us"}/>
            </div>
            <div className="flex justify-center">
                <SecondaryButton label={"Blog"}/>
            </div>
            <div className="flex justify-center">
                <SecondaryButton label={"Contact us"}/>
            </div>
            <div className="flex justify-center"> 
                <SecondaryButton label={"Press"}/>
            </div>
            <div className="flex justify-center"> 
                <SecondaryButton label={"Trust & Safety"}/>
            </div>
            <div className="flex justify-center">
                <SecondaryButton label={"Log in"} onClick={onSignIn}/>
            </div>
        </div>
    </div>
    <hr/>
    </>
    );
}