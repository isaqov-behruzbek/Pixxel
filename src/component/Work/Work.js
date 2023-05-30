import './work.css';
import {Jobleft} from '../Job-left/JobLeft';
import { Jobright } from '../Job-right/JobRight';
import Step from '../../assets/img/Job/step.svg';
import Solutions from '../../assets/img/Job/solutions.svg';
import Time from '../../assets/img/Job/time.svg';
import Winning from '../../assets/img/Job/winning.svg';
import Support from '../../assets/img/Job/support.svg';






export const Work = ({img,heeding}) => {
    return(
        <>
            <div className="work">
                <div className="container">
                    <h3 className='work_heeding'>Biz qanday ishlaymiz?</h3>
                    <p className="work_p">
                        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
                    </p>
                    <Jobleft img={Step} heeding={"Talablarni aniqlab chiqamiz"}/>
                    <Jobright img={Solutions} heeding={"Bir necha yechimlarni taklif qilamiz"} />
                    <Jobleft img={Time} heeding={"Loyiha uchun vaqt belgilaymiz"} />
                    <Jobright img={Winning} heeding={"A’lo sifat bilan bajarib topshiramiz"} />
                    <Jobleft img={Support} heeding={"Qo’llab-quvvatlab boramiz"} />

                    <div className="d-flex align-items-center mt-5 justify-content-center">
                        <a className='work_href' href="">Buyurtma berish</a>
                    </div>
                </div>

            </div>
        </>
    )
}