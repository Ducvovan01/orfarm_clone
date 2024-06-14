<script setup>
 const blogs= [
        {
          title: 'Avocado Grilled Salmon, Rich In Nutrients For The Body',
          image:'../assets/img/blog/blog-bg-8.jpg',
          link: 'blog-details.html',
          category: 'Lifestyle',
          categoryLink: 'shop-details.html',
          author: 'Admin',
          authorLink: '#',
          date: 'SEP 15. 2022',
          dateLink: '#',
          excerpt: 'These are the people who make your life easier. Egestas is tristique vestibulum...'
        },
        {
          title: 'Avocado Grilled Salmon, Rich In Nutrients For The Body',
          image:'../assets/img/blog/blog-bg-7.jpg',
          link: 'blog-details.html',
          category: 'Lifestyle',
          categoryLink: 'shop-details.html',
          author: 'Admin',
          authorLink: '#',
          date: 'SEP 15. 2022',
          dateLink: '#',
          excerpt: 'These are the people who make your life easier. Egestas is tristique vestibulum...'
        },
        {
          title: 'Avocado Grilled Salmon, Rich In Nutrients For The Body',
          image:'../assets/img/blog/blog-bg-1.jpg',
          link: 'blog-details.html',
          category: 'Lifestyle',
          categoryLink: 'shop-details.html',
          author: 'Admin',
          authorLink: '#',
          date: 'SEP 15. 2022',
          dateLink: '#',
          excerpt: 'These are the people who make your life easier. Egestas is tristique vestibulum...'
        },
        {
          title: 'Avocado Grilled Salmon, Rich In Nutrients For The Body',
          image:'../assets/img/blog/blog-bg-6.jpg',
          link: 'blog-details.html',
          category: 'Lifestyle',
          categoryLink: 'shop-details.html',
          author: 'Admin',
          authorLink: '#',
          date: 'SEP 15. 2022',
          dateLink: '#',
          excerpt: 'These are the people who make your life easier. Egestas is tristique vestibulum...'
        },
        {
          title: 'Avocado Grilled Salmon, Rich In Nutrients For The Body',
          image:'../assets/img/blog/blog-bg-5.jpg',
          link: 'blog-details.html',
          category: 'Lifestyle',
          categoryLink: 'shop-details.html',
          author: 'Admin',
          authorLink: '#',
          date: 'SEP 15. 2022',
          dateLink: '#',
          excerpt: 'These are the people who make your life easier. Egestas is tristique vestibulum...'
        },
        {
          title: 'Avocado Grilled Salmon, Rich In Nutrients For The Body',
          image:'../assets/img/blog/blog-bg-4.jpg',
          link: 'blog-details.html',
          category: 'Lifestyle',
          categoryLink: 'shop-details.html',
          author: 'Admin',
          authorLink: '#',
          date: 'SEP 15. 2022',
          dateLink: '#',
          excerpt: 'These are the people who make your life easier. Egestas is tristique vestibulum...'
        },
        {
          title: 'Avocado Grilled Salmon, Rich In Nutrients For The Body',
          image:'../assets/img/blog/blog-bg-2.jpg',
          link: 'blog-details.html',
          category: 'Lifestyle',
          categoryLink: 'shop-details.html',
          author: 'Admin',
          authorLink: '#',
          date: 'SEP 15. 2022',
          dateLink: '#',
          excerpt: 'These are the people who make your life easier. Egestas is tristique vestibulum...'
        },
        {
          title: 'Avocado Grilled Salmon, Rich In Nutrients For The Body',
          image:'../assets/img/blog/blog-bg-9.jpg',
          link: 'blog-details.html',
          category: 'Lifestyle',
          categoryLink: 'shop-details.html',
          author: 'Admin',
          authorLink: '#',
          date: 'SEP 15. 2022',
          dateLink: '#',
          excerpt: 'These are the people who make your life easier. Egestas is tristique vestibulum...'
        },
        {
          title: 'Avocado Grilled Salmon, Rich In Nutrients For The Body',
          image:'../assets/img/blog/blog-bg-3.jpg',
          link: 'blog-details.html',
          category: 'Lifestyle',
          categoryLink: 'shop-details.html',
          author: 'Admin',
          authorLink: '#',
          date: 'SEP 15. 2022',
          dateLink: '#',
          excerpt: 'These are the people who make your life easier. Egestas is tristique vestibulum...'
        }
      ];
</script>

<template>
  <section class="blog-area pt-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-4" v-for="(blog, index) in blogs" :key="index">
          <div class="tpblog__item tpblog__item-2 mb-20">
            <div class="tpblog__thumb fix">
              <a :href="blog.link"> <img :src="blog.image" :alt="blog.title" /></a>
            </div>
            <div class="tpblog__wrapper">
              <div class="tpblog__entry-wap">
                <span class="cat-links"
                  ><a :href="blog.categoryLink">{{ blog.category }}</a></span
                >
                <span class="author-by"
                  ><a :href="blog.authorLink">{{ blog.author }}</a></span
                >
                <span class="post-data"
                  ><a :href="blog.dateLink">{{ blog.date }}</a></span
                >
              </div>
              <h4 class="tpblog__title">
                <a :href="blog.link">{{ blog.title }}</a>
              </h4>
              <p>{{ blog.excerpt }}</p>
              <div class="tpblog__details">
                <a :href="blog.link">Continue reading <i class="icon-chevrons-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="basic-pagination text-center mb-80">
            <nav>
              <ul>
                <li><span class="current">1</span></li>
                <li><a href="blog.html">2</a></li>
                <li><a href="blog.html">3</a></li>
                <li>
                  <a href="blog.html"><i class="icon-chevrons-right"></i></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
