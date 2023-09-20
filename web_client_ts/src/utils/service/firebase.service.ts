import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../configs/firebaseConfig";

export let confirmationResult: ConfirmationResult = {} as ConfirmationResult;

export const sendOtp = (phone: string) => {
    const recapcha = new RecaptchaVerifier(auth, "sign-in-button", { size: 'invisible' });
    signInWithPhoneNumber(auth, phone, recapcha)
        .then((result) => {
            console.log("sent");
            confirmationResult = result;
        }).catch((error) => {
            console.log(error);
        });
}



