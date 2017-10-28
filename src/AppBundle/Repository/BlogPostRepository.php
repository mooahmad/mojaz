<?php

namespace AppBundle\Repository;

/**
 * BlogPostRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class BlogPostRepository extends \Doctrine\ORM\EntityRepository
{


	 public function mypostsdata($offset)
	{
	



	return $this->createQueryBuilder('u')
   
    ->setMaxResults($offset)

    ->getQuery()
    ->getResult()
;
	}



 public function mylatestdata($offset)
	{
	



	return $this->createQueryBuilder('u')
   
    ->setMaxResults($offset)
    ->orderBy('u.id', 'DESC')
    ->getQuery()
    ->getResult()
;
	}


public function postByCategory($id)
	{
	



	return $this->createQueryBuilder('u')
   
    
    ->andWhere('u.category_id = :id')
->setParameter('id', $id)

    ->getQuery()
    ->getResult()
;
	}






	
}
