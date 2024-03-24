export async function getFeaturesCards() {
  try {
    const specialData = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/property/get-home-projects?limit=3&page=1`
    );
    const specialCardData = await specialData.json();
    return specialCardData;
  } catch (error) {
    return null;
  }
}
