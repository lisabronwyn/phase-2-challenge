// Get a snippet from text
//
// Write a function snippet(string, maxlength) that shortens the string given to the maxlength and adds the ellipsis character ("…") to the end of string, and then returns the shortened string. If the string is shorter than the maxlength, just return the string unmodified.
//
// Example:
//
// snippet("For the following exercises,", 10) // => "For the fo…"
// snippet("Hello, world!", 20) // => "Hello, world!"


function snippet(string, maxlength)
{
    snippet("For the following exercises,", 10) // The letters [iIl1] are slim enough to only count as half a character.
    length += Math.ceil(text.replaceAll("[^iIl]", "").length() / 2.0d);

    if (text.length() > length)
    {
        return text.substring(0, length - 3) + "...";
    }

    return text;
}
