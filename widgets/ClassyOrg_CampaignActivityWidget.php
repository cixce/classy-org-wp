<?php

class ClassyOrg_CampaignActivityWidget extends WP_Widget
{
    const ID = 'ClassyOrg_CampaignActivityWidget';

    /**
     * Create instance of widget
     */
    public function __construct()
    {
        parent::__construct(self::ID, 'Classy.org: Campaign Activity');
    }

    /**
     * Draw form for widget options.
     *
     * @param array $instance
     * @return null
     */
    public function form($instance)
    {
        if ($instance) {
            $title = array_key_exists('title', $instance) ? $instance['title'] : '';
            $campaignId = array_key_exists('id', $instance) ? $instance['id'] : '';
            $count = array_key_exists('id', $instance) ? $instance['count'] : '';
        } else {
            $title = '';
            $campaignId = '';
            $count = 5;
        }

        echo '<div class="widget-content">';

        // Campaign ID
        echo '<p>'
            . '<label for="' . $this->get_field_name('id') . '">' . _e('Campaign ID:') . '</label>'
            . '<input class="widefat" id="' . $this->get_field_id('id')
            . '" name="' . $this->get_field_name('id') . '" type="text" value="'
            . esc_attr($campaignId) . '" placeholder="123456789" />'
            . '</p>';

        // Title
        echo '<p>'
            . '<label for="' . $this->get_field_name('title') . '">' . _e('Title:') . '</label>'
            . '<input class="widefat" id="' . $this->get_field_id('title')
            . '" name="' . $this->get_field_name('title') . '" type="text" value="'
            . esc_attr($title) . '" placeholder="My Campaign Title" />'
            . '</p>';

        // Count
        echo '<p>'
            . '<label for="' . $this->get_field_name('count') . '">' . _e('Count:') . '</label>'
            . '<input class="widefat" id="' . $this->get_field_id('count')
            . '" name="' . $this->get_field_name('count') . '" type="text" value="'
            . esc_attr($count) . '" placeholder="5" />'
            . '</p>';

        echo '</div>';

    }

    /**
     * Update settings
     *
     * @param array $newInstance
     * @param array $oldInstance
     * @return array
     */
    public function update($newInstance, $oldInstance)
    {
        $instance = $oldInstance;

        // FIXME: validate parameters
        $instance['id'] = strip_tags($newInstance['id']);
        $instance['title'] = strip_tags($newInstance['title']);
        $instance['count'] = (int)strip_tags($newInstance['count']);

        return $instance;
    }

    /**
     * Draw widget
     *
     * @param array $args
     * @param array $instance
     */
    public function widget($args, $instance)
    {
        // Defer to renderer which we also use for short codes
        $classyContent = new ClassyContent();
        $fundraisers = $classyContent->campaignFundraisers($instance['id'], $instance['count']);

        ClassyOrg::addStylesheet();
        echo self::render($fundraisers, $instance);
    }

    /**
     * Generate HTML for campaign top fundraisers
     *
     * @param $fundraisers
     * @param $params
     * @return string
     */
    public static function render($activity, $params)
    {
        $widgetTemplate = <<<WIDGET_TEMPLATE

    <div class="classy-org-activity classy-org-widget widget">
      %s
      <div class="classy-org-activity_items">
        %s
      </div>
    </div>

WIDGET_TEMPLATE;

        $itemTemplate = <<<ITEM_TEMPLATE

    <div class="classy-org-activity_item">
      <div class="classy-org-activity_item-image">%s</div>
      <div class="classy-org-activity_item-info">
        <span class="classy-org-activity_item-info-name">%s</span>
        donated
        <span class="classy-org-activity_item-info-amount">%s</span>
        <span class="classy-org-activity_item-info-date" created="%s"'></span>
      </div>
    </div>

ITEM_TEMPLATE;

        $logoTemplate = '<img src="%s" />';

        if (!empty($params['title']))
        {
            $title = sprintf('<h3 class="classy-org-activity_title">%s</h3>', esc_html($params['title']));
        } else
        {
            $title = '';
        }
        $data = $activity['data'];
        foreach ($data as $a)
        {
          $name = $a['transaction']['member_name'];
          $amount = $a['link_text'];
          $created = $a['created_at'];
          $itemsHtml .= sprintf(
              $itemTemplate,
              strtoupper(substr($name, 0, 1)),
              esc_html($name),
              esc_html($amount),
              esc_html($created)
          );
        }
        $html = sprintf($widgetTemplate, $title, $itemsHtml);

        return $html;
    }
}
