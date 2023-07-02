# Write a method that when given aa string, it removes all duplicates that are next to each other.
# This should be recursive so that when duplicates are eliminated and causes new duplicates, those should also be eliminated.
# If all elements are eliminated, return "Empty String". Otherwise, return the shortened string
# Ex: 'abbac'
# => 'c'
# remove 'bb' on first iteration and then 'aa' on second, leaving 'c' as the shortnerned string

def shorten_string str
    if str.length == 1
        return str
    end

    i = 0 
    str_arr = str.split('')

    while i < str_arr.length
        if str_arr[i] == str_arr[i+1]
            str_arr.slice!(i,2)
            return shorten_string(str_arr.join)
        else
            i += 1 
        end
    end
    str_arr.join
end