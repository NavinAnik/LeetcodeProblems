class Solution:
    def reverse(self, x: int) -> int:
        max_limit = 2**31 - 1
        reverse_number = 0
        negative = x < 0
        x = abs(x)
        while x > 0:
            temp = x % 10
            reverse_number  = reverse_number * 10 + temp
            if reverse_number > (max_limit) :
                return 0
            x = x // 10
        if negative: 
            return -reverse_number
        return reverse_number
        