import React from 'react';
import classes from "./CreateSkin.module.css";

const CreateSkin = () => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.cardWrap}>
                <form>
                    <fieldset className={classes.fieldset}>
                        <div className={classes.title}>
                            <div><label>스킨 제목</label></div>
                            <div>
                                <input type="text" placeholder={"스킨명을 입력하세요"}/>
                            </div>
                        </div>
                        <div>
                            <div><label>게시글 주소</label></div>
                            <div><input type="text" value={"https://"}/></div>
                        </div>
                        <div>
                            <div><label>스킨 태그</label></div>
                            <div>
                                <label>내 스킨과 맞는 태그를 선택하세요.</label>
                            </div>
                        </div>
                        <div>
                            <div><label>대표 이미지</label></div>
                            <div><input type="file"/></div>
                        </div>
                    </fieldset>
                </form>
                </div>
            </div>
        </>
    );
};

export default CreateSkin;