import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Helplayout() {
    return (
        <div className='help-layout'>
            <h2>kya help chahiye bhidu tereko</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi qui nihil hic aperiam beatae, vitae unde, dolore animi temporibus debitis molestiae architecto dolorem. Earum eum, aperiam officiis omnis amet sunt.
                Pariatur cupiditate vel, reiciendis autem ea, sed consequuntur adipisci ratione blanditiis magni recusandae dicta officiis! Est natus velit, quasi dolor pariatur eaque ad doloribus vero nemo quidem aliquam dicta ipsam.
                Accusantium maiores quasi sint dolorem, totam nihil recusandae debitis asperiores perspiciatis, amet, culpa tempore vero. Nemo sapiente, nostrum sit quibusdam consectetur iusto harum laborum quia, aspernatur dolorum earum porro ratione.
                Impedit quos officiis, magnam blanditiis, unde doloribus porro minus quasi beatae repudiandae eligendi aut, commodi a id harum eos delectus qui non nihil nulla nesciunt reprehenderit. Deserunt assumenda natus quidem!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi qui nihil hic aperiam beatae, vitae unde, dolore animi temporibus debitis molestiae architecto dolorem. Earum eum, aperiam officiis omnis amet sunt.
                Pariatur cupiditate vel, reiciendis autem ea, sed consequuntur adipisci ratione blanditiis magni recusandae dicta officiis! Est natus velit, quasi dolor pariatur eaque ad doloribus vero nemo quidem aliquam dicta ipsam.
                Accusantium maiores quasi sint dolorem, totam nihil recusandae debitis asperiores perspiciatis, amet, culpa tempore vero. Nemo sapiente, nostrum sit quibusdam consectetur iusto harum laborum quia, aspernatur dolorum earum porro ratione.
                Impedit quos officiis, magnam blanditiis, unde doloribus porro minus quasi beatae repudiandae eligendi aut, commodi a id harum eos delectus qui non nihil nulla nesciunt reprehenderit. Deserunt assumenda natus quidem!</p>
        <nav>
            <NavLink to="faq"> View the faq </NavLink>
            <NavLink to="contact">Contact Us</NavLink>
            </nav>
        <Outlet />
        </div>
    )
}
