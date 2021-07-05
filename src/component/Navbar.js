import { useRouter } from "next/router";
import classNames from "classnames";
export default function Navbar () {
    const logo = {
        fontSize:'16px',
    }
    let activItem;
    const router = useRouter();
    if(router.pathname === "/"){
        activItem = "home";
    }else if(router.pathname === "/store"){
        // console.log("features");
        activItem = "store";
    }else if(router.pathname === "/product"){
        // console.log("features");
        activItem = "product";
    }else if(router.pathname === "/order"){
        // console.log("features");
        activItem = "order";
    }else if(router.pathname === "/customer"){
        // console.log("features");
        activItem = "customer";
    }else if(router.pathname === "/board"){
        // console.log("features");
        activItem = "board";
    }else if(router.pathname === "/design"){
        // console.log("features");
        activItem = "design";
    }else if(router.pathname === "/mobile"){
        // console.log("features");
        activItem = "mobile";
    }else if(router.pathname === "/promotion"){
        // console.log("features");
        activItem = "promotion";
    }else if(router.pathname === "/marketing"){
        // console.log("features");
        activItem = "marketing";
    }else if(router.pathname === "/market"){
        // console.log("features");
        activItem = "market";
    }else if(router.pathname === "/option"){
        // console.log("features");
        activItem = "option";
    }else if(router.pathname === "/appStore"){
        // console.log("features");
        activItem = "appStore";
    }
    function goLink(e, data){
        e.preventDefault();
        // console.log(e.target.name)
        if(e.target.name === "home"){
            router.push("/");
        }else if(e.target.name === "store"){
            console.log('store')
            router.push("/store");
        }else if(e.target.name === "product"){
            console.log('product')
            router.push("/product");
        }else if(e.target.name === "order"){
            console.log('order')
            router.push("/order");
        }else if(e.target.name === "customer"){
            console.log('customer')
            router.push("/customer");
        }else if(e.target.name === "board"){
            console.log('board')
            router.push("/board");
        }else if(e.target.name === "design"){
            console.log('design')
            router.push("/design");
        }else if(e.target.name === "mobile"){
            console.log('mobile')
            router.push("/mobile");
        }else if(e.target.name === "promotion"){
            console.log('promotion')
            router.push("/promotion");
        }else if(e.target.name === "marketing"){
            console.log('marketing')
            router.push("/marketing");
        }else if(e.target.name === "market"){
            console.log('market')
            router.push("/market");
        }else if(e.target.name === "option"){
            console.log('option')
            router.push("/option");
        }else if(e.target.name === "appStore"){
            console.log('appStore')
            router.push("/appStore");
        }
    }
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-thema-blue-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className="icon-logo h1" style={{...logo}}></span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className={classNames("nav-link", (activItem === "store") && "active")} aria-current="store" name="store" onClick={goLink}>상점관리</a>
                        </li>
                        <li className="nav-item">
                        <a className={classNames("nav-link", (activItem === "product") && "active" )} name="product" onClick={goLink}>상품관리</a>
                        </li>
                        <li className="nav-item">
                        <a className={classNames("nav-link", (activItem === "order") && "active" )} name="order" onClick={goLink}>주문관리</a>
                        </li>
                        <li className="nav-item">
                        <a className={classNames("nav-link", (activItem === "customer") && "active" )} name="customer" onClick={goLink}>고객관리</a>
                        </li>
                        <li className="nav-item">
                        <a className={classNames("nav-link", (activItem === "board") && "active" )} name="board" onClick={goLink}>게시판관리</a>
                        </li>
                        <li className="nav-item">
                        <a className={classNames("nav-link", (activItem === "design") && "active" )} name="design" onClick={goLink}>디자인관리</a>
                        </li>
                        <li className="nav-item">
                        <a className={classNames("nav-link", (activItem === "mobile") && "active" )} name="mobile" onClick={goLink}>모바일쇼핑몰</a>
                        </li>
                        <li className="nav-item">
                        <a className={classNames("nav-link", (activItem === "promotion") && "active" )} name="promotion" onClick={goLink}>프로모션</a>
                        </li>
                        <li className="nav-item">
                        <a className={classNames("nav-link", (activItem === "marketing") && "active" )} name="marketing" onClick={goLink}>마케팅센터</a>
                        </li>
                        <li className="nav-item">
                        <a className={classNames("nav-link", (activItem === "market") && "active" )} name="market" onClick={goLink}>마켓통합관리</a>
                        </li>
                        <li className="nav-item">
                        <a className={classNames("nav-link", (activItem === "option") && "active" )} name="option" onClick={goLink}>부가서비스</a>
                        </li>
                        <li className="nav-item">
                        <a className={classNames("nav-link", (activItem === "appStore") && "active" )} name="appStore" onClick={goLink}>앱스토어</a>
                        </li>
                        {/* <li className="nav-item">
                        <a className="nav-link disabled" onClick={goLink} tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}