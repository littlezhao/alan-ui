export default {
    mounted(el) {
        const oSelectorInput = el.querySelector(".selector-input");
        const oPlaceHolder = oSelectorInput.querySelector(".placeholder"),
            oInput = oSelectorInput.querySelector("input"),
            oIcon = oSelectorInput.querySelector("i");
        const placeHolderValue = oInput.getAttribute("placeHolder");
        console.log(oInput);
        oInput.addEventListener('focus', (e) => {
            e.target.placeholder = "";
            oIcon.className = "iconfont iconsearch"
        }, false)
        oInput.addEventListener('blur', (e) => {
            if (!e.target.value) {
                e.target.placeholder = placeHolderValue;
                oIcon.className = "iconfont iconarrowdown"
            }
        }, false)

    }
}
