import EffectSwipper from 'components/templates/EffectSwipper/EffectSwipper'
import React from 'react'
import "./FirstPage.scss"
import QRCode from 'qrcode.react';
import star from "../../../assets/star.svg"
import BasicCard from 'components/templates/BasicCard';

const arr = [
    {
        heading:"Nusa Penida",
        location:"Bali, Indonesia"
    },
    {
        heading:"Broken Beach",
        location:"Peru"
    },
    {
        heading:"Machu Picchu",
        location:"Bali, Indonesia"
    },
    {
        heading:"Bora Bora",
        location:"Island, French Polynesia"
    },
    {
        heading:"Angkor Wat",
        location:"Siem Reap, Cambodia"
    },
    {
        heading:"Niagara Falls",
        location:"United States"
    },
    {
        heading:"Eiffel Tower",
        location:"Paris"
    },
    {
        heading:"Giza Necropolis",
        location:"Giza, Egypt"
    },
    {
        heading:"Colosseum",
        location:"Rome, Italy"
    },
    {
        heading:"Petra",
        location:"Petra, Jordan"
    },
]


const FirstPage = () => {
    return (
        <>
            <div className="first__container">
                <div className="upper">
                    <div className="left">
                        <div className="left__upper">

                            

                            <div className="slider">
                                <EffectSwipper />
                            </div>
                            <div className="left__upper__text">
                                <div className="heading">Colosseum, Rome Italy.</div>
                                <div className="para1">Start Location: <span>~50 char</span></div>
                                <div className="para1">End Location: <span>~50 char</span></div>
                                <div className="para1">Start Time: <span>12-07-2022</span> | <span>10:00 AM</span></div>
                                <div className="para1">End Time: <span>12-07-2022</span> | <span>10:00 AM</span></div>
                                <div className="para2"><span>$99/</span>Per Person</div>
                                <div className="qrCode">
                                <QRCode value="https://www.fiverr.com/users/zahidghafoor40/seller_dashboard" renderAs="canvas" />
                            </div>
                                <div className="rating">
                                    <img src={star} alt="" className="rating__star" />
                                    <div className="text">4.9</div>

                                </div>


                            </div>
                        </div>

                        <div className="left__bottom">
                            <div className="heading">Overview</div>
                            <div className="bottom__para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem id tempora molestiae officiis commodi laborum libero consequuntur! Cupiditate esse reprehenderit nemo deleniti, repellat, laudantium nisi vel aliquam eaque dolore fugit culpa possimus praesentium hic tenetur? Error rerum impedit, inventore suscipit neque dolores quis sit aspernatur provident minus amet perspiciatis facilis nihil dignissimos porro voluptates vero  iure pariatur libero atque iste nobis dolorum maxime ratione? Placeat illum odit fugit harum laudantium optio, nesciunt mollitia sint suscipit repellendus  <br />  modi quaerat iste consequuntur ipsam delectus ut vero vitae! Eius optio quasi assumenda, tenetur accusamus reprehenderit illum a nostrum ipsum dicta, quaerat cum atque nihil corrupti iusto? Recusandae, voluptatem. Deleniti numquam cumque commodi aperiam error blanditiis minus, dolorem reprehenderit praesentium similique voluptatibus, incidunt consequuntur officia quasi eius tempore fugit quae nemo soluta labore odit perspiciatis, repellat architecto deserunt. Facilis doloribus enim odit expedita voluptate minus perspiciatis porro amet ducimus rerum vel necessitatibus assumenda voluptas, veniam laudantium explicabo fuga delectus possimus quod iste quasi deserunt? Quas adipisci accusamus earum commodi, architecto blanditiis, nobis magnam dicta sit fugiat dignissimos? Sequi temporibus porro ipsa architecto incidunt molestiae deleniti, ut consequatur doloremque natus maxime error et voluptatem, fuga rerum, officiis reiciendis saepe laboriosam odit voluptatibus animi praesentium eum quasi nulla! Repellendus vel aut, dolorem modi voluptatum labore animi sapiente aperiam architecto molestiae assumenda non ipsa voluptatem iure repudiandae odio dolorum recusandae nisi quaerat eius porro quam consectetur sed mollitia? <br /> In repellat possimus accusamus dignissimos facere enim minima illo, cupiditate incidunt provident dolorum, consequatur earum voluptates necessitatibus corrupti, dolor quae qui. Quia rem, totam voluptas amet voluptatem soluta quae ipsum nobis, deserunt laudantium aut in. Iusto amet ipsam beatae sapiente facilis? Harum commodi quas cupiditate eligendi non blanditiis rerum magnam praesentium magni deleniti deserunt tenetur suscipit provident accusamus beatae omnis quod velit, porro, cum quos dolor eum in, quidem nobis. Odio at veritatis dolorem omnis. Totam veritatis harum voluptate, deleniti ipsum beatae quia quisquam voluptas unde error inventore in perspiciatis provident rem esse nemo recusandae! Laborum animi ipsa ipsam ut tempore reiciendis. Nobis, doloribus quibusdam. Sequi cupiditate numquam repellat architecto consectetur, earum in. Minima reprehenderit, nesciunt voluptatibus odit illum aperiam reiciendis debitis? Sequi suscipit aperiam veritatis repellendus optio accusamus ips
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <iframe className='frame' title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.8083639023066!2d74.4158532154682!3d31.087257175509794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919b9e4c0b469e5%3A0xe8e1bd8667a7f333!2sShakir%20madical%20store!5e0!3m2!1sen!2sin!4v1644147325324!5m2!1sen!2sin" width="100%" height="-webkit-fill-available" frameBorder="0" style={{ border: 0 }} allowFullScreen={true} aria-hidden="false"></iframe>




                    </div>
                </div>














                <div className="bottom">

                    <div className="bottom__heading">
                        Don't Worry here are some similar options
                    </div>

                    <div className="pageCard">
                        {arr.map((data)=>{
                            return(
                                <BasicCard heading={data.heading} location={data.location}/>
                            )
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}

export default FirstPage