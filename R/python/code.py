IPV4 = "IPv4"
IPV6 = "IPv6"
ERROR = "Error"

# return IPV4, IPV6 or ERROR constant
def check_ip_address(ip_to_check: str) -> str:
    # your code goes here
    return ERROR

ip_to_check = input()
print(check_ip_address(ip_to_check))