<?php

namespace ezr_keymedia\models\v2;

/**
 * KeyMedia connector, makes the module talk the talk that KeyMedia talks
 * Enables the KeyMedia API
 *
 * <code>
 *   $api = new Connector($username, $apiKey, $host);
 *   $api->searchByTags($tags, $operator);
 *   $api->search($q);
 *   $result = $api->uploadMedia($filepath, $filename, $tags, $attributes);
 * </code>
 *
 * @author Henning Kvinnesland (henning@keyteq.no)
 * @author Raymond Julin (raymond@keyteq.no)
 * @since 1.0.0
 */
class Connector extends \ezr_keymedia\models\ConnectorBase
{

    /**
     * Generic search, utilize whatever you might want as conditions
     *
     * @param array $conditions
     * @return array
     */
    public function search(array $conditions = array())
    {
    }

    /**
     * Search by one or more tags.
     *
     * @param $q
     * @param bool $attributes
     * @param bool $collection
     * @param bool $limit
     * @param bool $offset
     * @param bool $width
     * @param bool $height
     * @param bool $externalId
     *
     * @return mixed
     */
    public function searchByTerm($q, $attributes = false, $collection = false, $limit = false, $offset = false, $width = false, $height = false, $externalId = false)
    {
        $params = compact('q', 'limit', 'offset');
        if ($width && !is_array($width)) $params['width'] = $width;
        if ($height && !is_array($height)) $params['height'] = $height;

        if ($attributes !== false) $params['attributes'] = $attributes;
        if ($collection !== false) $params['collection'] = $collection;
        if ($externalId !== false) $params['externalId'] = $externalId;

        return $this->makeRequest('/media.json', $params);
    }

    /**
     *
     * Retrieves images matching one or more tags.
     *
     * @param array $tags A list of tags
     * @param string $operator and (default is or)
     * @param int $limit
     * @param int $offset
     * @param int|false $width
     * @param int|false $height
     *
     * @return mixed
     */
    public function searchByTags($tags = array(), $operator = 'or', $limit = 25, $offset = 0, $width = false, $height = false)
    {
        $params = compact('tags', 'operator', 'limit', 'offset');

        if ($width !== false) $params['width'] = $width;
        if ($height !== false) $params['height'] = $height;

        $results = $this->makeRequest('/media.json', $params);
        if ($results && isset($results->media)) return $results->media;
    }

    /**
     * Return media information for given image id
     * 
     * @param string $id
     * @return object 
     */
    public function media($id)
    {
        return $this->makeRequest('/media/' . $id . '.json', array())->media;
    }

    /**
     * Add new version
     *
     * @param string $id
     * @param string $slug
     * @param array $transformation
     * @return string Relative url to new version
     */
    public function addVersion($id, $slug, array $transformation = array())
    {
        $payload = array('slug' => $slug);

        if (isset($transformation['size']))
            $payload['size'] = $transformation['size'];
        if (isset($transformation['coords']))
            $payload['coords'] = $transformation['coords'];

        $url = '/media/' . $id . '/versions.json';
        return $this->makeRequest($url, $payload, 'POST');
    }

    /**
     * Uploads media to KeyMedia
     *
     * @param $filename
     * @param $originalName
     * @param array $tags
     * @param array $attributes
     *
     * @return mixed|null
     */
    public function uploadMedia($filename, $originalName, $tags = array(), $attributes = array())
    {
        if (!file_exists($filename))
            return null;

        if (ini_get('max_execution_time') < $this->timeout)
            set_time_limit($this->timeout + 10);

        $file = '@' . $filename;
        $payload = compact('file', 'originalName', 'tags', 'attributes');

        return $this->makeRequest('/media.json', $payload, 'POST');
    }

    /**
     * Simplify a result set
     *
     * @param object $media
     * @return object
     */
    public function simplify($media)
    {
        $parts = explode('.', $media->name);
        $ending = array_pop($parts);
        $width = 600;
        $height = 400;
        $thumb = (object) array(
            'url' => 'http://' . $this->mediabaseDomain . '/' . $width . 'x' . $height . '/' . $media->_id . '.jpg'
        );
        return (object) array(
            'id' => $media->_id,
            'tags' => $media->tags,
            'filesize' => $media->file->size,
            'width' => (int) $media->file->width,
            'height' => (int) $media->file->height,
            'thumb' => $thumb,
            'filename' => $media->name
        );
    }

    /**
     * Builds the url for accessing keymedia.
     *
     * @param $action
     * @param $params
     *
     * @return bool|string
     */
    protected function getRequestUrl($action, array $payload = array())
    {
        $url = $this->mediabaseDomain . $action;

        // Ensure it has http://
        if (strpos($url, "http") === false) $url = 'http://' . $url;

        return $url;
    }

    protected function sign($username, $secret, $payload)
    {
        return hash_hmac('sha256', $payload, $secret);
    }
}
