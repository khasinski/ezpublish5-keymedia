{if not( is_set( $format ) )}
    {def $format = array(300,200)}
{/if}
{def $media = keymedia($attribute,$format)}

{if is_set($quality)|not}
    {def $quality = null()}
{/if}

{if eq($attribute.content.id, 0)|not}
    {if $media.url|is_set()}
        {def $template = 'design:content/datatype/view/'|concat($media.type)|concat('.tpl')}

        {def $params = hash(
            'title',  cond($title|is_set(), $title, ''),
            'class',  cond($class|is_set(), $class, ''),
            'width',  cond($width|is_set(), $width, $media.width),
            'height', cond($height|is_set(), $height, $media.height)
        )}

        {include uri=$template media=$media param=$params}
    {/if}
{/if}