class Solution(object):
    def lengthOfLastWord(self, s):
        s = s.split()
        count = 0
        for x in s[len(s)-1]:
            count = count+1
        return count

        