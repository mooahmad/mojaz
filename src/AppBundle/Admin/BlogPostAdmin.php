<?php
namespace AppBundle\Admin;

use AppBundle\Entity\BlogPost;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;

use Sonata\AdminBundle\Datagrid\DatagridMapper;

class BlogPostAdmin extends AbstractAdmin
{
  



 protected function configureFormFields(FormMapper $formMapper)
    {
        

         $formMapper
      ->with('Content')
            ->add('title', 'text')
            ->add('body', 'textarea')
             ->add('category', 'entity', array(
            'class' => 'AppBundle\Entity\Category',
            'choice_label' => 'name',
        ))
       
            ->add('category', 'sonata_type_model', array(
                'class' => 'AppBundle\Entity\Category',
                'property' => 'name',
            ))
        ->end();




    }

    protected function configureListFields(ListMapper $listMapper)
    {
     $listMapper
            ->addIdentifier('title')
            ->add('category.name')
            ->add('draft')
        ;


    }





protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('title');
    }





}