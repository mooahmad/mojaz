<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Category;
use AppBundle\Entity\BlogPosts;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)



    {
            //Get all Blog Posts data
           $rep = $this->getDoctrine()->getRepository('AppBundle:BlogPost');
            //Get all Category data 
           $repo = $this->getDoctrine()->getRepository('AppBundle:Category');
            //Get Only 5 Categories data 
           $cats = $repo->mydata(5);
            //Get Only 5 Blog Posts data 
           $posts = $rep->mypostsdata(5);
            //Get latest 9 Blog Posts data 
           $latestposts = $rep->mylatestdata(9);

        // the twig template and it's variables
        return $this->render('default/index.html.twig',array('cats' => $cats,'posts'=> $posts,'latestposts'=>$latestposts ));
    }







 /**
     * @Route("/post_{id}", name="singlepost")
     */
    public function singlePost(Request $request, $id)


              
    {     // here's the single post data
        
            //Get all Category data
           $repo = $this->getDoctrine()->getRepository('AppBundle:Category');
            //Get all Blog Posts data
           $rep = $this->getDoctrine()->getRepository('AppBundle:BlogPost');
           
            //Get the specific Post data with it's ID
           $posts = $rep->find($id);

            //Get Only 5 Categories data 
           $cats = $repo->mydata(5);


            
          // the twig template and it's variables
        return $this->render('default/single.html.twig',array('cats' => $cats,'posts'=> $posts ));
    }


  /**
     * @Route("/Category/{id}", name="catposts")
     */
    public function categoryposts(Request $request, $id)



    {
        // a specific category posts
           
            //Get all Category data
           $repo = $this->getDoctrine()->getRepository('AppBundle:Category');
            //Get all Blog Posts data
           $rep = $this->getDoctrine()->getRepository('AppBundle:BlogPost');
            
            //Get Only 5 Categories data 
           $cats = $repo->mydata(5);
            // Get a specific category posts
           $cat = $repo->find($id);

            // the category posts with its relationship.
           $query = $cat->getBlogPosts();

        $paginator  = $this->get('knp_paginator');
        $pagination = $paginator->paginate(
        $query, /* query NOT result */
        $request->query->getInt('page', 1)/*page number*/,
        9/*limit per page*/
    );


        return $this->render('default/catpos.html.twig',array('cats' => $cats,'cat' => $cat,'posts'=> $posts ,'pagination'=>$pagination));
    }




/**
     * @Route("/allposts", name="posts")
     */
    public function posts(Request $request)



    {    

      // All posts
           
            //Get all Category data
           $repo = $this->getDoctrine()->getRepository('AppBundle:Category');
            //Get all Blog Posts data
           $rep = $this->getDoctrine()->getRepository('AppBundle:BlogPost');
            
            //Get All Posts
           $query = $rep->findAll();
          
            //Get only 5 Categories
           $cats = $repo->mydata(5);
           
           
            
        $paginator  = $this->get('knp_paginator');
        $pagination = $paginator->paginate(
        $query, /* query NOT result */
        $request->query->getInt('page', 1)/*page number*/,
        9/*limit per page*/
    );

       

        return $this->render('default/posts.html.twig',array('pagination'=>$pagination,'cats' => $cats));
    }


    /**
     * @Route("/", name="homy")
     */
    public function Categories(Request $request)



    {
        
           //Get All Categories


           $repo = $this->getDoctrine()->getRepository('AppBundle:Category');
           
           $cats = $repo->mydata(5);


        return $this->render('base.html.twig',array('cats' => $cats,'posts'=> $posts));
    }
}
