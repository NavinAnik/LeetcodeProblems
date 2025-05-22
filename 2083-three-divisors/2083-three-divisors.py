class Solution:
    def isThree(self, n: int) -> bool:
        count = 1
        for x in range(1,n):
            if n % x == 0:
                count+=1
        if count == 3:
            return True
        return False