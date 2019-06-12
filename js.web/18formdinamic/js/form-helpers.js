
   export function setRadio(radio, data){
        radio.some()

        let value
        for (let i = 0; i< radio.length; i++){
            const item = radio[i];
            if(item.checked) {
                return item.value
            }
        }
        return false
    }