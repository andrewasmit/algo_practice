# Imagine an ATM that can hand out $20s, $50s, and $100s only
# Write a method that takes in an amount (int)
# Output an array that represents how many bills of each value were given
# Ex: [1,0,2] would represent a total of $140; a $100 bill and (2) $20 bills
# [1,0,2] would be a better answer than [0,2,2] because it is 1 bill smaller

def atm int
    arr = [0,0,0]
    total = int

    while total > 0
        if total > 100 && (total -100) >50 then
            arr[0] += 1
            total -= 100
        end
        if total > 50 && (total - 50) > 20 then
            arr[1] += 1
            total -= 50
        end
        if total > 20 then
            arr[2] +=1
            total -=20
        end
     end
     arr
end


# This is not the full response I gave. Just trying to showcase a bit of my thought prcoess here. I believe I started somewhere close to this and then navigated more through the tests (which I obciously don't have anymore)