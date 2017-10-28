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
        
           
           $repo = $this->getDoctrine()->getRepository('AppBundle:Category');
$cats = $repo->mydata(5);


 $rep = $this->getDoctrine()->getRepository('AppBundle:BlogPost');
$posts = $rep->mypostsdata(5);


$latestposts = $rep->mylatestdata(9);

        // replace this example code with whatever you need
        return $this->render('default/index.html.twig',array('cats' => $cats,'posts'=> $posts,'latestposts'=>$latestposts ));
    }







 /**
     * @Route("/post_{id}", name="singlepost")
     */
    public function singlePost(Request $request, $id)



    {
        
           
           $repo = $this->getDoctrine()->getRepository('AppBundle:Category');
           $rep = $this->getDoctrine()->getRepository('AppBundle:BlogPost');

$cats = $repo->mydata(5);


 $rep = $this->getDoctrine()->getRepository('AppBundle:BlogPost');
$posts = $rep->find($id);


// $latestposts = $rep->mylatestdata(9);

        // replace this example code with whatever you need
        return $this->render('default/single.html.twig',array('cats' => $cats,'posts'=> $posts ));
    }


  /**
     * @Route("/Category/{id}", name="catposts")
     */
    public function categoryposts(Request $request, $id)



    {
        
           
           $repo = $this->getDoctrine()->getRepository('AppBundle:Category');
           $rep = $this->getDoctrine()->getRepository('AppBundle:BlogPost');

           $cats = $repo->mydata(5);
           $cat = $repo->find($id);


 //$rep = $this->getDoctrine()->getRepository('AppBundle:BlogPost');
           $posts = $cat->getBlogPosts();
           $query = $cat->getBlogPosts();

        $paginator  = $this->get('knp_paginator');
        $pagination = $paginator->paginate(
        $query, /* query NOT result */
        $request->query->getInt('page', 1)/*page number*/,
        9/*limit per page*/
    );



// $latestposts = $rep->mylatestdata(9);

        // replace this example code with whatever you need
        return $this->render('default/catpos.html.twig',array('cats' => $cats,'cat' => $cat,'posts'=> $posts ,'pagination'=>$pagination));
    }




/**
     * @Route("/allposts", name="posts")
     */
    public function posts(Request $request)



    {
        
           
           $repo = $this->getDoctrine()->getRepository('AppBundle:Category');
           $rep = $this->getDoctrine()->getRepository('AppBundle:BlogPost');

           $query = $rep->findAll();
          

           

           $cats = $repo->mydata(5);
           
           

        $paginator  = $this->get('knp_paginator');
        $pagination = $paginator->paginate(
        $query, /* query NOT result */
        $request->query->getInt('page', 1)/*page number*/,
        9/*limit per page*/
    );

       


        // replace this example code with whatever you need
        return $this->render('default/posts.html.twig',array('pagination'=>$pagination,'cats' => $cats));
    }


    /**
     * @Route("/", name="homy")
     */
    public function Categories(Request $request)



    {
        
           
           $repo = $this->getDoctrine()->getRepository('AppBundle:Category');
$cats = $repo->mydata(5);

 
        // replace this example code with whatever you need
        return $this->render('base.html.twig',array('cats' => $cats,'posts'=> $posts));
    }
}
