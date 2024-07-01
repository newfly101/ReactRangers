package com.daybreak.rangers.repository;

import com.daybreak.rangers.model.Member;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

public class MemoryMemberRepositoryTest {

    MemoryMemberRepository repository = new MemoryMemberRepository();

    @AfterEach
    public void afterEach() {
        repository.clearStore(); // 메모리를 지워하는 class 생성
        // 의존관계를 지워주는 방법을 추가
    }

    @Test
    public void save() {
        Member member = new Member();
        member.setName("KimDawn");

        repository.save(member);

        Member result = repository.findById(member.getId()).get();
        System.out.println("result = {}"+ (result == member)); // true

        assertEquals(member, result); // true 시 결과물 출력x
        assertThat(member).isEqualTo(result); // check하는 방식3
    }

    @Test
    public void findByName() {
        Member member1 = new Member();
        member1.setName("KimDawn");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("KimSpace");
        repository.save(member2);

        Member result = repository.findByName("KimDawn").get();

        assertThat(result).isSameAs(member1);
    }

    @Test
    public void findAll() {
        Member member1 = new Member();
        member1.setName("KimDawn");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("KimSpace");
        repository.save(member2);

        List<Member> members = repository.findAll();

        assertThat(members.size()).isEqualTo(2);
    }
}
