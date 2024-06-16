import React from 'react';
import classes from './Admin.module.css';

const AdminPage = () => {
    return (
        <div className={classes.adminPage}>
            <div className={classes.adminBlogCard}>
                <div className={classes.adminCard}>
                    이미지
                </div>
                <div className={classes.adminCard}>
                    내 블로그
                </div>
            </div>
            <div className={classes.adminBlogCardList}>
                <div>
                    <label>운영중인 블로그</label>
                    <div style={{background: "white"}}>
                        <div>
                            <div>
                                {/*<img>*/}
                            </div>
                            <div>
                                <div>새벽의 이것저것</div>
                                {/*<div>블로그 url<img></div>*/}
                            </div>
                            <div>대표</div>
                        </div>
                    </div>
                    <div style={{background: "white"}}>
                        <div>
                            <div>
                                <img src="" alt="blogMain" />
                            </div>
                            <div>
                                <div>새벽의 이것저것</div>
                                {/*<div>블로그 url<img></div>*/}
                            </div>
                            <div>대표</div>
                        </div>
                    </div>
                    <div>
                        <div>대표 블로그는 방문한 블로그/팀블로그 활동 시 사용됩니다.</div>
                        <div>
                            <button>변경 사항 저장</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AdminPage;
