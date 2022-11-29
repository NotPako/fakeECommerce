export const errorCheck = (name, value) => {

    switch(name){

        case 'email':

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) ) {
                return "Email en formato inválido";
            } else {
                return '';
            }


        case 'phone':

            if (! /(?=.*?[0-9])/.test(value) ) {
                return "Teléfono incorrecto";
            } else {
                return "";
            }

 

        case 'address':


            if(value.length < 8){
                return "Write 8 characters at least"
            } else {

        

                if (! /[\d()+-]/g.test(value) ) {
                    return "Password en formato inválido";
                } else {
                    return "";
                }
            }

        default:
            console.log("what are you sending to me????");
        break;



        }

}
