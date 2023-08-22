import style from './Tech.module.css'
import { PiFileHtmlBold } from 'react-icons/pi';
import {  SiJavascript} from 'react-icons/si';
import {  LiaReact} from 'react-icons/lia';
import {  TbBrandRedux} from 'react-icons/tb';
import {  FaNode} from 'react-icons/fa';
import {  SiExpress} from 'react-icons/si';
import {  SiSequelize} from 'react-icons/si';
import {  BiLogoPostgresql} from 'react-icons/bi';
import {  SiMysql} from 'react-icons/si';
import {  SiVisualstudio} from 'react-icons/si';
import {  AiFillGithub} from 'react-icons/ai';
import {  BiGitBranch} from 'react-icons/bi';

const Tech = () => {
  return (
    <div>
        <p className={style.p}>Conociminetos en : HTML5, CSS, JavaScript, ES6, React, Redux, Node.js, Express, Sequelize, PostgreSQL, MySQL, Visual Studio Code, GitHub, Git.</p>
        <div className={style.divContainerIcons}>
            <h4><PiFileHtmlBold className={style.h4icons}/></h4>
            <h4><SiJavascript className={style.h4icons}/></h4>
            <h4><LiaReact className={style.h4icons}/></h4>
            <h4><TbBrandRedux className={style.h4icons}/></h4>
            <h4><FaNode className={style.h4icons}/></h4>
            <h4><SiExpress className={style.h4icons}/></h4>
            <h4><SiSequelize className={style.h4icons}/></h4>
            <h4><BiLogoPostgresql className={style.h4icons}/></h4>
            <h4><SiMysql className={style.h4icons}/></h4>
            <h4><SiVisualstudio className={style.h4icons}/></h4>
            <h4><AiFillGithub className={style.h4icons}/></h4>
            <h4><BiGitBranch className={style.h4icons}/></h4>
        </div>
    </div>
  )
}

export default Tech
