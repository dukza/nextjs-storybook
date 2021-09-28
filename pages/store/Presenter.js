import Button from "./../../src/component/Buttons/Button.tsx"
import Plus from './../../src/icon/svg/plus.svg';
export default function Presenter () {
    return(
        <>
             <img height="300px" src={Plus} />
            <Button>상점관리 하기</Button>
        </>
    )
}