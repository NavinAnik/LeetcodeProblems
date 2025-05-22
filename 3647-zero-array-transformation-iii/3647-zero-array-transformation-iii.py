import heapq

class Solution:
    def maxRemoval(self, nums, queries):
        n = len(nums)
        queries.sort()
        available = []  
        running = []    
        query_index = 0
        applied_count = 0

        for i in range(n):
            while query_index < len(queries) and queries[query_index][0] <= i:
                heapq.heappush(available, -queries[query_index][1])
                query_index += 1
            while running and running[0] < i:
                heapq.heappop(running)

            while nums[i] > len(running):
                if not available or -available[0] < i:
                    return -1
                end = -heapq.heappop(available)
                heapq.heappush(running, end)
                applied_count += 1

        return len(queries) - applied_count
