<?php
/*
 Template Name: Work Snippets
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/
?>

<?php the_post(); ?>
<div class="workThumbnail">
  <a href="<?php echo  get_permalink($pageChild->ID); ?>" rel="bookmark" title="<?php echo $pageChild->post_title; ?>"><?php echo get_the_post_thumbnail($pageChild->ID, 'thumbnail'); ?></a>	 
</div>
<div class="workContent">
<h3 class="workSnippetTitle"><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h3>
<!-- <div class="serviceSnippetExcerpt">
<?php the_excerpt() ?>
</div> -->
<a class="readMore" href="<?php echo get_permalink(); ?>">Read more</a>
</div>