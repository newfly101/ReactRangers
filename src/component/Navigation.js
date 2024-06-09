import React, {useEffect} from "react";
import classes from "./Navigation.module.css";
import {Link, useLocation} from "react-router-dom";

const Navigation = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const [url, setUrl] = React.useState("/");
    const location = useLocation();

    const onClickAdminPage = () => {
        console.log(location.pathname);
        setUrl(location.pathname);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        const changeUrl = (url) => {
            console.log(location.pathname);
            setUrl(url);
        }

        changeUrl(location.pathname);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [location.pathname]);

    return (
        <nav className={scrolled ? classes.navBar : classes.navBarBlank}>
            {(url !== "/forum" && url !== "/skin") ?
                <div className={classes.navBarBox}>
                    <div className={classes.pageTitle}>
                        <Link to="/">Tistory</Link>
                    </div>
                    <div className={classes.pageLinkBox}>
                        <Link to="/feed">피드</Link>
                    </div>
                    <div className={classes.pageLinkBox}>
                        <Link to="/story">스토리</Link>
                    </div>
                    <div className={classes.pageLinkBox}>
                        <Link to="/skin">스킨</Link>
                    </div>
                    <div className={classes.pageLinkBox}>
                        <Link to="/forum">포럼</Link>
                    </div>
                </div>
                :
                <div className={classes.navBarBox}>
                    <div className={scrolled ? classes.pageTitle : classes.pageTitleBlank}>
                        <Link to="/">Tistory</Link>
                    </div>
                    <div className={scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank}>
                        <Link to="/feed">피드</Link>
                    </div>
                    <div className={scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank}>
                        <Link to="/story">스토리</Link>
                    </div>
                    <div className={scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank}>
                        <Link to="/skin">스킨</Link>
                    </div>
                    <div className={scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank}>
                        <Link to="/forum">포럼</Link>
                    </div>
                </div>
            }

            <div
                className={classes.navBarLogin}
            >
                <button onClick={onClickAdminPage}>
                    <Link to="/admin">시작하기</Link>
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
