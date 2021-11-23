function friends(n) {
  const onePersonBasicCapabilities = 2;
  let revisedPills = onePersonBasicCapabilities;
  let friendsInvolved = 0;
  while (revisedPills < n) {
    revisedPills = 2 ** (++friendsInvolved + 1);
  }

  return friendsInvolved;
}
