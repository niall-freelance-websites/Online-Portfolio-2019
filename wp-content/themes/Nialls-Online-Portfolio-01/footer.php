			<footer class="footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">

				<div class="bioText02">
					<h2>Let's work together</h2>
					<p>Like my work, and interested in working together? I am interested in hearing about projects big and small.</p>
					<p>Feel free to get in touch so we can discuss your requirements.</p>
					<p><button onclick="window.location.href='http://crafteddigital.co.uk/contact/'">Contact me</button></p>
				</div>

				<div id="inner-footer" class="wrap cf">

					<div class="footerlinks">
						<?php $my_postid = 79;//This is page id or post id
						$content_post = get_post($my_postid);
						$content = $content_post->post_content;
						$content = apply_filters('the_content', $content);
						$content = str_replace(']]>', ']]&gt;', $content);
						echo $content;?>
					</div>

					<nav role="navigation">
						<?php wp_nav_menu(array(
    					'container' => 'div',                           // enter '' to remove nav container (just make sure .footer-links in _base.scss isn't wrapping)
    					'container_class' => 'footer-links cf',         // class of container (should you choose to use it)
    					'menu' => __( 'Footer Links', 'bonestheme' ),   // nav name
    					'menu_class' => 'nav footer-nav cf',            // adding custom nav class
    					'theme_location' => 'footer-links',             // where it's located in the theme
    					'before' => '',                                 // before the menu
    					'after' => '',                                  // after the menu
    					'link_before' => '',                            // before each link
    					'link_after' => '',                             // after each link
    					'depth' => 0,                                   // limit the depth of the nav
    					'fallback_cb' => 'bones_footer_links_fallback'  // fallback function
						)); ?>
					</nav>

					<p class="source-org copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>.</p>

				</div>

				<?php
				if ( is_active_sidebar( 'footer-widget' ) ) : ?>
			    <div id="footer-widget-area" class="fw-widget widget-area" role="complementary">
				<?php dynamic_sidebar( 'footer-widget' ); ?>
			    </div>
				<?php endif; ?>

			</footer>

		</div>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>

	</body>

</html> <!-- end of site. what a ride! -->
