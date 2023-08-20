import style from './Tech.module.css'
import { PiFileHtmlBold } from 'react-icons/Pi';
import {  SiJavascript} from 'react-icons/Si';
import {  LiaReact} from 'react-icons/Lia';
import {  TbBrandRedux} from 'react-icons/Tb';
import {  FaNode} from 'react-icons/Fa';
import {  SiExpress} from 'react-icons/Si';
import {  SiSequelize} from 'react-icons/Si';
import {  BiLogoPostgresql} from 'react-icons/Bi';
import {  SiMysql} from 'react-icons/Si';
import {  SiVisualstudio} from 'react-icons/Si';
import {  AiFillGithub} from 'react-icons/Ai';
import {  BiGitBranch} from 'react-icons/Bi';

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
