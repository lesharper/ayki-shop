import React from 'react';
import Post from "./Post";
import post1 from "../../img/post1.jpg"
import post2 from "../../img/post2.jpg"
import post3 from "../../img/post3.jpg"
import post4 from "../../img/post4.jpg"


import styles from "./post.module.css"

const ContainerPost = () => {

    return (
        <div className={styles.container}>
            <Post image={post1}
                  title='Добро пожаловать!'
                  text='Магазин работает с 8 утра до 8 вечера, а сайт готов принять ваш заказ, в любое время суток!'
                  variant='right'/>

            <Post image={post2}
                  title='Огромный выбор'
                  text='Здесь вы найдете любую одежду, дополняющую ваш образ'
                  variant='left'/>

            <Post image={post3}
                  title='Еженедельные скидки'
                  text='Приобретайте понравившиеся товары, по выгодной цене!'
                  variant='right'/>

            <Post image={post4}
                  title='Новые товары!'
                  text='Сезонные распродажи и привоз новых товаров, не даст вам заскучать! '
                  variant='left'/>
        </div>
    );
}

export default ContainerPost;
