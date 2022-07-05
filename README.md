# ROADBLOCKS

Using "lastChild" to remove the last element child of an element instead of "lastElementChild". Using the former takes into account other things like text content, not just elements. Hence, I needed to use the latter to successfully remove the last child element.