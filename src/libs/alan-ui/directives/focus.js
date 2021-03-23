export default {
    mounted(el) {
        const oSelectorInput = el.querySelector(".selector-input");
        const oSelectorMenu = el.querySelector(".selector-menu");
        const oPlaceHolder = oSelectorInput.querySelector(".placeholder"),
            oInput = oSelectorInput.querySelector("input"),
            oIcon = oSelectorInput.querySelector("i");
        const placeHolderValue = oInput.getAttribute("placeHolder");
        oInput.addEventListener('focus', (e) => {
            e.target.placeholder = "";
            oIcon.className = "iconfont iconsearch"
            setTimeout(() => {
                oSelectorMenu.style.display = "block"
            }, 150);
        }, false)
        oInput.addEventListener('blur', (e) => {
            oIcon.className = "iconfont iconarrowdown"
            setTimeout(() => {
                oSelectorMenu.style.display = "none"
                if (!e.target.value) {
                    e.target.placeholder = placeHolderValue;
                }
            }, 150)
        }, false)

    }
}
