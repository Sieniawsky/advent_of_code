## Interface Ideas
aoc
aoc --year 2015
aoc --year 2015 --day 1
aoc --year 2015 --day 1 --part 1
aoc --year 2015 --day 1 --part 2
aoc -y 2015 -d 1 -p 1

## Plan
- Implement CLI tooling
- Add 2015 run.sh entrypoint and run.ts dispatcher
- Implement 2015 day 1
- Test build, link, and CLI run end-to-end

## Nice to have
- Init script which sets exec permissions for all shell scripts
- New year generator
- Setup script to build and link CLI
